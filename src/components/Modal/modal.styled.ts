import { Modal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    color: #000;
    border-radius: 16px;
    border: 1px solid #dedede;
    padding: 0;
  }

  .ant-modal-header {
    border-bottom: 1px solid #dedede;
    margin-bottom: 0;
  }

  .ant-modal-title {
    font-weight: bold;
    font-size: 22px;
    padding: 15px;
  }

  .ant-modal-body {
    marginleft: 10px;
  }
  p {
    padding: 15px;
    border-bottom: 1px solid #dedede;
    margin: 0;
  }
  .ant-btn {
    width: 100%;
    background-color: #e7e9eb;
    height: 45px;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 15px;
    margin-top: 0;
  }
  .anticon {
    margin-right: 15px;
  }
`;
