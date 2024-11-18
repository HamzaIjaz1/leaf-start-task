import React, { useState } from "react";
import { StyledButton } from "../Buttons/button.styled";
import { StyledModal } from "../Modal/modal.styled";
import { StyledEventTitle } from "./event.styled";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_TEST_EVENT } from "../../apollo/queries/testEvent";
import {
  AlignLeftOutlined,
  CalendarTwoTone,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { DateTimeRangeFormatter } from "../../utils/date-time-utils";

interface EventPopupProps {
  handleToggleEventPopup: () => void;
}

const EventPopup = ({ handleToggleEventPopup }: EventPopupProps) => {
  const [open, setOpen] = useState(true);

  const { loading, error, data } = useQuery(GET_TEST_EVENT);
  const client = useApolloClient();

  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
      handleToggleEventPopup();
    }, 2000);
  };

  const handleCancelEvent = () => {
    client.cache.modify({
      id: client.cache.identify({
        __typename: "TestEvent",
        id: data?.getTestEvent.id,
      }),
      fields: {
        name() {
          return "Canceled Test Event";
        },
      },
    });
  };

  const handleCancel = () => {
    setOpen(false);
    handleToggleEventPopup();
  };

  return (
    <>
      <StyledModal
        title={
          <StyledEventTitle>
            <span>
              <CalendarTwoTone twoToneColor={"#31BBA9"} />
            </span>
            {data?.getTestEvent.name}
          </StyledEventTitle>
        }
        open={open}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
        footer={[
          <StyledButton
            key="cancel"
            color="danger"
            variant="filled"
            onClick={handleCancelEvent}
            disabled={loading}
          >
            Cancel
          </StyledButton>,
        ]}
      >
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>
                <ClockCircleOutlined />
                {DateTimeRangeFormatter(
                  data?.getTestEvent.dateRange.start,
                  data?.getTestEvent.dateRange.end
                )}
              </p>
              {/* <p> */}
              <p>
                <AlignLeftOutlined />
                {data?.getTestEvent.description}
              </p>
            </>
          )}
        </div>
      </StyledModal>
    </>
  );
};

export default EventPopup;
