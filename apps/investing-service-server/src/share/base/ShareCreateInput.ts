/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { PortfolioCreateNestedManyWithoutSharesInput } from "./PortfolioCreateNestedManyWithoutSharesInput";
import { Type } from "class-transformer";
import { TransactionCreateNestedManyWithoutSharesInput } from "./TransactionCreateNestedManyWithoutSharesInput";

@InputType()
class ShareCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PortfolioCreateNestedManyWithoutSharesInput,
  })
  @ValidateNested()
  @Type(() => PortfolioCreateNestedManyWithoutSharesInput)
  @IsOptional()
  @Field(() => PortfolioCreateNestedManyWithoutSharesInput, {
    nullable: true,
  })
  portfolios?: PortfolioCreateNestedManyWithoutSharesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutSharesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutSharesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutSharesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutSharesInput;
}

export { ShareCreateInput as ShareCreateInput };
