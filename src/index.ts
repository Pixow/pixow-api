import { Avatars } from "./avatars";
import { Base } from "./base";
import { applyMixins } from "./utils";

class PixowApi extends Base {}

interface PixowApi extends Avatars {}

applyMixins(PixowApi, [Avatars]);

export default PixowApi;
