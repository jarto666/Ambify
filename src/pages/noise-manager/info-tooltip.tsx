import styled from "@emotion/styled";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoTooltipContainer = styled.div`
  width: 13px;
  height: 13px;
  color: ${(p) => p.theme.colors.iconPrimary};
  text-transform: none;
`;

type InfoTooltipProps = {
  className?: string;
  content: string;
};

const InfoTooltip = ({ className, content }: InfoTooltipProps) => {
  return (
    <>
      <InfoTooltipContainer className={className} data-tooltip-id={content}>
        <ReactTooltip
          id={content}
          place="top"
          variant="dark"
          content={content}
          style={{ zIndex: 100000 }}
        />
        <FontAwesomeIcon icon={faCircleInfo} height="13px" width="13px" />
      </InfoTooltipContainer>
    </>
  );
};

export default InfoTooltip;
