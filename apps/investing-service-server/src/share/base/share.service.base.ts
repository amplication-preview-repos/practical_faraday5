/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Share as PrismaShare,
  Portfolio as PrismaPortfolio,
  Transaction as PrismaTransaction,
} from "@prisma/client";

export class ShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ShareCountArgs, "select">): Promise<number> {
    return this.prisma.share.count(args);
  }

  async shares(args: Prisma.ShareFindManyArgs): Promise<PrismaShare[]> {
    return this.prisma.share.findMany(args);
  }
  async share(args: Prisma.ShareFindUniqueArgs): Promise<PrismaShare | null> {
    return this.prisma.share.findUnique(args);
  }
  async createShare(args: Prisma.ShareCreateArgs): Promise<PrismaShare> {
    return this.prisma.share.create(args);
  }
  async updateShare(args: Prisma.ShareUpdateArgs): Promise<PrismaShare> {
    return this.prisma.share.update(args);
  }
  async deleteShare(args: Prisma.ShareDeleteArgs): Promise<PrismaShare> {
    return this.prisma.share.delete(args);
  }

  async findPortfolios(
    parentId: string,
    args: Prisma.PortfolioFindManyArgs
  ): Promise<PrismaPortfolio[]> {
    return this.prisma.share
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .portfolios(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.share
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }
}
