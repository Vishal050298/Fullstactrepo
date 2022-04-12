import { IValidator } from '../interface/interface_module'


class ValidatorCLS implements IValidator {
    isValidStr(s: string,regex): boolean {
      
        return regex.test(s);
        
    }

    
}

export { ValidatorCLS };