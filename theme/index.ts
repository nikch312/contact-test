import { extendTheme } from "@chakra-ui/react"

import { Button, Text } from "./components"

const overrides = {
  components: {
    Button,
    Text
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        color: "#707070"
      }
    },
  },
}

export default extendTheme(overrides)
