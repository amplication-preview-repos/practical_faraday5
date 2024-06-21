/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Portfolio } from "./Portfolio";
import { PortfolioCountArgs } from "./PortfolioCountArgs";
import { PortfolioFindManyArgs } from "./PortfolioFindManyArgs";
import { PortfolioFindUniqueArgs } from "./PortfolioFindUniqueArgs";
import { CreatePortfolioArgs } from "./CreatePortfolioArgs";
import { UpdatePortfolioArgs } from "./UpdatePortfolioArgs";
import { DeletePortfolioArgs } from "./DeletePortfolioArgs";
import { Share } from "../../share/base/Share";
import { User } from "../../user/base/User";
import { PortfolioService } from "../portfolio.service";
@graphql.Resolver(() => Portfolio)
export class PortfolioResolverBase {
  constructor(protected readonly service: PortfolioService) {}

  async _portfoliosMeta(
    @graphql.Args() args: PortfolioCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Portfolio])
  async portfolios(
    @graphql.Args() args: PortfolioFindManyArgs
  ): Promise<Portfolio[]> {
    return this.service.portfolios(args);
  }

  @graphql.Query(() => Portfolio, { nullable: true })
  async portfolio(
    @graphql.Args() args: PortfolioFindUniqueArgs
  ): Promise<Portfolio | null> {
    const result = await this.service.portfolio(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Portfolio)
  async createPortfolio(
    @graphql.Args() args: CreatePortfolioArgs
  ): Promise<Portfolio> {
    return await this.service.createPortfolio({
      ...args,
      data: {
        ...args.data,

        share: args.data.share
          ? {
              connect: args.data.share,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Portfolio)
  async updatePortfolio(
    @graphql.Args() args: UpdatePortfolioArgs
  ): Promise<Portfolio | null> {
    try {
      return await this.service.updatePortfolio({
        ...args,
        data: {
          ...args.data,

          share: args.data.share
            ? {
                connect: args.data.share,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Portfolio)
  async deletePortfolio(
    @graphql.Args() args: DeletePortfolioArgs
  ): Promise<Portfolio | null> {
    try {
      return await this.service.deletePortfolio(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Share, {
    nullable: true,
    name: "share",
  })
  async getShare(@graphql.Parent() parent: Portfolio): Promise<Share | null> {
    const result = await this.service.getShare(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Portfolio): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
