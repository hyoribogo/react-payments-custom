import "styled-components";
import { Colors, FontSizes, FontWeights } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
  }
}
