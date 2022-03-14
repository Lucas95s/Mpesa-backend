import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRole } from '../prisma/wallet-role.enum';

@InputType()
export class UsersWalletsCreateManyWalletInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => WalletRole, {nullable:true})
    role?: keyof typeof WalletRole;
}
