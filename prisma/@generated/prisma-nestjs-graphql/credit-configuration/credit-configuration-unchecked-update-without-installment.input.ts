import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumSlicesEnumFieldUpdateOperationsInput } from '../prisma/enum-slices-enum-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumCreditConfigurationStatusFieldUpdateOperationsInput } from '../prisma/enum-credit-configuration-status-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { CreditUncheckedUpdateManyWithoutCreditConfigurationInput } from '../credit/credit-unchecked-update-many-without-credit-configuration.input';
import { CreditConfigurationsWalletsUncheckedUpdateManyWithoutConfigurationInput } from '../credit-configurations-wallets/credit-configurations-wallets-unchecked-update-many-without-configuration.input';
import { CreditRequestUncheckedUpdateOneWithoutCreditConfigurationInput } from '../credit-request/credit-request-unchecked-update-one-without-credit-configuration.input';

@InputType()
export class CreditConfigurationUncheckedUpdateWithoutInstallmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    shouldPayDeposit?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    depositPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => EnumSlicesEnumFieldUpdateOperationsInput, {nullable:true})
    slices?: EnumSlicesEnumFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    seviFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    daysToStartAfterDelivery?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    lateInstallmentFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    affiliatePercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    creditLateFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    creditLateDays?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumCreditConfigurationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCreditConfigurationStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfAllowedCredits?: IntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    fundFeesPercentage?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fundId?: StringFieldUpdateOperationsInput;

    @Field(() => CreditUncheckedUpdateManyWithoutCreditConfigurationInput, {nullable:true})
    credit?: CreditUncheckedUpdateManyWithoutCreditConfigurationInput;

    @Field(() => CreditConfigurationsWalletsUncheckedUpdateManyWithoutConfigurationInput, {nullable:true})
    attachedWallets?: CreditConfigurationsWalletsUncheckedUpdateManyWithoutConfigurationInput;

    @Field(() => CreditRequestUncheckedUpdateOneWithoutCreditConfigurationInput, {nullable:true})
    creditRequests?: CreditRequestUncheckedUpdateOneWithoutCreditConfigurationInput;
}
