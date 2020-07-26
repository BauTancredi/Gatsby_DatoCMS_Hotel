exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsBedroom {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("There are no results", result.errors)
  }

  const rooms = result.data.allDatoCmsBedroom.nodes

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve("./src/components/rooms.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
