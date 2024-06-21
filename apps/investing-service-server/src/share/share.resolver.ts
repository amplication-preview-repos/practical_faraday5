import * as graphql from "@nestjs/graphql";
import { ShareResolverBase } from "./base/share.resolver.base";
import { Share } from "./base/Share";
import { ShareService } from "./share.service";

@graphql.Resolver(() => Share)
export class ShareResolver extends ShareResolverBase {
  constructor(protected readonly service: ShareService) {
    super(service);
  }
}
