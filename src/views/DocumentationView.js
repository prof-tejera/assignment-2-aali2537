import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import Circle from "../components/generic/Circle";
import Panel from "../components/generic/Panel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Button "
            component={<Button type="Primary" />}
            propDocs={[
              {
                prop: "type",
                description:
                  "Changes button between the primary color scheme or secondary color depending on value",
                type: "string",
                defaultValue: "Primary",
              },
            ]}
          />
          <DocumentComponent
            title="Circle "
            component={<Circle size={100} strokeWidth={10} />}
            propDocs={[
              {
                prop: "size",
                description:
                  "Determines the width and height of the svg element",
                type: "int",
                defaultValue: "450",
              },
              {
                prop: "strokeWidth",
                description: "Determines the thickness of the progress bar",
                type: "int",
                defaultValue: "20",
              },
            ]}
          />
          <DocumentComponent
            title="panel "
            component={<Panel>Panel Content</Panel>}
            propDocs={[
              {
                prop: "type",
                description:
                  "Changes button between the primary color scheme or secondary color depending on value",
                type: "string",
                defaultValue: "Primary",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
