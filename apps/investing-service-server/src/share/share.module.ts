import { Module } from "@nestjs/common";
import { ShareModuleBase } from "./base/share.module.base";
import { ShareService } from "./share.service";
import { ShareController } from "./share.controller";
import { ShareResolver } from "./share.resolver";

@Module({
  imports: [ShareModuleBase],
  controllers: [ShareController],
  providers: [ShareService, ShareResolver],
  exports: [ShareService],
})
export class ShareModule {}
