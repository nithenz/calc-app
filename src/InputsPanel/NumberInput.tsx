import { useCallback } from "react";
import Input from "../ui/Input";

const NubmerInput = () => {

    
  const handleBlur = useCallback(() => {}, []);

  return <Input onBlur={handleBlur}></Input>;
};

export default NubmerInput;
