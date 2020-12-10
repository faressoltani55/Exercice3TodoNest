import { IsIn, IsOptional } from "class-validator";
import { TodoStatusEnum } from "../enum/todo-status.enum"
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateTodoDto{
    @IsIn([
        TodoStatusEnum.waiting,
        TodoStatusEnum.done,
        TodoStatusEnum.actif
    ],{
        message:`Status is invalid`
    })
    @IsOptional()
    statut : TodoStatusEnum;

    @IsNotEmpty()
    @MinLength(6,{
        message:"$property is invalid, size must be larger than  $constraint1"
    })
    @IsOptional()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @IsOptional()
    description: string;
}
