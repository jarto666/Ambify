import styled from "@emotion/styled";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RotateSoundButtonContainer = styled.div`
  width: 18px;
  height: 18px;
  color: ${(p) => p.theme.colors.iconPrimary};
  text-transform: none;
  cursor: pointer;
`;

type RotateSoundButtonProps = {
  className?: string;
  content: string;
  onClick: () => void;
};

const RotateSoundButton = ({
  className,
  content,
  onClick,
}: RotateSoundButtonProps) => {
  return (
    <>
      <RotateSoundButtonContainer
        className={className}
        data-tooltip-id={content}
        onClick={onClick}
      >
        <ReactTooltip
          id={content}
          place="top"
          variant="dark"
          content={content}
          style={{ zIndex: 100000 }}
        />
        <FontAwesomeIcon icon={faRotate} height="18px" width="18px" size="3x" />
      </RotateSoundButtonContainer>
    </>
  );
};

export default RotateSoundButton;
