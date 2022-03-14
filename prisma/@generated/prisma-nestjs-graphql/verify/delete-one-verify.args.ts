import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';

@ArgsType()
export class DeleteOneVerifyArgs {

    @Field(() => VerifyWhereUniqueInput, {nullable:false})
    where!: VerifyWhereUniqueInput;
}
