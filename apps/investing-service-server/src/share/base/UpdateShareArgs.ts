/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShareWhereUniqueInput } from "./ShareWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShareUpdateInput } from "./ShareUpdateInput";

@ArgsType()
class UpdateShareArgs {
  @ApiProperty({
    required: true,
    type: () => ShareWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShareWhereUniqueInput)
  @Field(() => ShareWhereUniqueInput, { nullable: false })
  where!: ShareWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShareUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShareUpdateInput)
  @Field(() => ShareUpdateInput, { nullable: false })
  data!: ShareUpdateInput;
}

export { UpdateShareArgs as UpdateShareArgs };