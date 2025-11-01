import { ReactNode } from "react";

//any name: string  = can be string
//children: string = to be able to use in between
//<Alert>like this<Alert>
//children: ReactNode = to use complex string format like
//<Alert>like <span>this</span><Alert>

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
        <button type="button" className="close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Alert;
