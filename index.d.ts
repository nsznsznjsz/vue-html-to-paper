import { PluginFunction } from "vue"

/**
 * See https://www.w3schools.com/Jsref/met_win_open.asp for more information
 */
interface Options {
  name?: string
  specs?: string[]
  styles?: string[]
  replace?: boolean
  autoClose?: boolean
  windowTitle?: string
}

interface HtmlToPaper {
  (id: string, localOptions: Options, callback?: () => void): void
}

export const VueHtmlToPaper: PluginFunction<Options>

declare module "vue/types/vue" {
  interface Vue {
    $htmlToPaper: HtmlToPaper
  }
}
