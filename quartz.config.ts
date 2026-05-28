import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "plurality-llm-wiki-de",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "de-DE",
    baseUrl: "nishio.github.io/plurality-llm-wiki-de",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Crimson Pro",
        body: "Source Sans 3",
        code: "IBM Plex Mono"
      },
      colors: {
        lightMode: {
          light: "#f5f3ee",
          lightgray: "#dad6c9",
          gray: "#8a857a",
          darkgray: "#3a382f",
          dark: "#1d1c17",
          secondary: "#1a4d6e",
          tertiary: "#a55a2a",
          highlight: "rgba(26, 77, 110, 0.12)",
          textHighlight: "#ffef9a"
        },
        darkMode: {
          light: "#13130f",
          lightgray: "#2a2922",
          gray: "#605d50",
          darkgray: "#d6d3c5",
          dark: "#f1eee2",
          secondary: "#86b4d4",
          tertiary: "#d6995f",
          highlight: "rgba(134, 180, 212, 0.16)",
          textHighlight: "#8f7a10"
        }
      }
    }
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"]
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark"
        },
        keepBackground: false
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description()
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages()
    ]
  }
}

export default config
