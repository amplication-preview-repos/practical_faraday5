/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PortfolioService } from "../portfolio.service";
import { PortfolioCreateInput } from "./PortfolioCreateInput";
import { Portfolio } from "./Portfolio";
import { PortfolioFindManyArgs } from "./PortfolioFindManyArgs";
import { PortfolioWhereUniqueInput } from "./PortfolioWhereUniqueInput";
import { PortfolioUpdateInput } from "./PortfolioUpdateInput";

export class PortfolioControllerBase {
  constructor(protected readonly service: PortfolioService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Portfolio })
  async createPortfolio(
    @common.Body() data: PortfolioCreateInput
  ): Promise<Portfolio> {
    return await this.service.createPortfolio({
      data: {
        ...data,

        share: data.share
          ? {
              connect: data.share,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        quantity: true,

        share: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Portfolio] })
  @ApiNestedQuery(PortfolioFindManyArgs)
  async portfolios(@common.Req() request: Request): Promise<Portfolio[]> {
    const args = plainToClass(PortfolioFindManyArgs, request.query);
    return this.service.portfolios({
      ...args,
      select: {
        createdAt: true,
        id: true,
        quantity: true,

        share: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async portfolio(
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Portfolio | null> {
    const result = await this.service.portfolio({
      where: params,
      select: {
        createdAt: true,
        id: true,
        quantity: true,

        share: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePortfolio(
    @common.Param() params: PortfolioWhereUniqueInput,
    @common.Body() data: PortfolioUpdateInput
  ): Promise<Portfolio | null> {
    try {
      return await this.service.updatePortfolio({
        where: params,
        data: {
          ...data,

          share: data.share
            ? {
                connect: data.share,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          quantity: true,

          share: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Portfolio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePortfolio(
    @common.Param() params: PortfolioWhereUniqueInput
  ): Promise<Portfolio | null> {
    try {
      return await this.service.deletePortfolio({
        where: params,
        select: {
          createdAt: true,
          id: true,
          quantity: true,

          share: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
