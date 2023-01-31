import "@fontsource/ibm-plex-sans"
import "@fontsource/fira-code"

import { reflectPreference } from "./src/lib/theme-common"
import "./src/sass/layouts/core.scss"


// set preference early to prevent page flashing and give CSS needed attributes
reflectPreference()
