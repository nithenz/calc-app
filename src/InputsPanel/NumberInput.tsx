import { useCallback } from "react";
import Input from "../ui/Input";

/**
 *  Maybe will be implemened
 */
const NubmerInput = () => {

    
  const handleBlur = useCallback(() => {}, []);

  return <Input onBlur={handleBlur}></Input>;
};

export default NubmerInput;
