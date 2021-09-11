import { extendTheme } from "@chakra-ui/react"

import { colors } from "./colors"

import { breakpoints } from "./breakpoints"

import { Heading, Text } from "./components"

const overrides = {
  breakpoints,
  colors,
  components: {
    Heading,
    Text,
  },
  fonts: {
    heading: "ECB",
    body: "ECB",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
}

export default extendTheme(overrides)
