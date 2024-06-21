import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShareService } from "./share.service";
import { ShareControllerBase } from "./base/share.controller.base";

@swagger.ApiTags("shares")
@common.Controller("shares")
export class ShareController extends ShareControllerBase {
  constructor(protected readonly service: ShareService) {
    super(service);
  }
}
