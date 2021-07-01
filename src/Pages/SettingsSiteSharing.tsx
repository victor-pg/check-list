import React from "react";
import {
  Layout,
  LayoutSection,
  TypographyText,
  Input,
  NavListButton,
  Space,
  ImageMultipleUpload,
  Align,
} from "@brizy/ui";
import { Share } from "@brizy/ui-icons";
import { useState } from "react";

const SettingsSiteSharing = () => {
  const [inputValue, setInputValue] = useState<string>(
    "Merge Creative - Innovative Products for Marketing Experts"
  );

  const [textAreaValue, setTextAreaValue] = useState<string>(
    "Merge Creative is a hosted platform powered by Brizy Builder, providing a more streamlined experience when creating landing pages. Unlimited space & projects."
  );

  const dataItems = [{ id: 1, icon: Share, text: "Sharing" }];

  return (
    <>
      <Layout>
        <LayoutSection>
          <NavListButton active={1} onChange={() => {}} items={dataItems} />
        </LayoutSection>
      </Layout>

      <Layout alignY="center">
        <LayoutSection span={8}>
          <TypographyText color="gray-darkest" size="small" strong={true}>
            Social information
          </TypographyText>
        </LayoutSection>
      </Layout>

      <Layout alignY="center">
        <LayoutSection span={8}>
          <TypographyText size="small">
            When sharing your pages on social networks, Brizy Cloud will use
            this content to display in links.
          </TypographyText>
        </LayoutSection>
      </Layout>

      <Space spacing={[0, 0, "small", 0]}></Space>

      <Layout alignY="center">
        <LayoutSection span={8}>
          <TypographyText color="gray-darkest" size="small" strong={true}>
            Status Message
          </TypographyText>
        </LayoutSection>
      </Layout>
      <Layout alignY="center">
        <LayoutSection span={8}>
          <Input.Text
            placeholder="Enter the status message"
            value={inputValue}
            size="large"
            onChange={(e) => setInputValue(e)}
          ></Input.Text>
        </LayoutSection>
      </Layout>

      <Space spacing={[0, 0, "small", 0]}></Space>

      <Layout alignY="center">
        <LayoutSection span={8}>
          <TypographyText color="gray-darkest" size="small" strong={true}>
            Description (max. 280 characters)
          </TypographyText>
        </LayoutSection>
      </Layout>

      <Layout alignY="center">
        <LayoutSection span={8}>
          <Input.TextArea
            placeholder="Enter the site description"
            size="small"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e)}
          />
        </LayoutSection>
      </Layout>

      <Space spacing={[0, 0, "small", 0]}></Space>

      <Layout alignY="center" align="middle">
        <LayoutSection span={6}>
          <TypographyText color="gray-darkest" size="small" strong={true}>
            Image Thumbnail
          </TypographyText>
          <br />

          <TypographyText size="small">
            Upload an image to represent the site content when sharing on social
            networks
          </TypographyText>
        </LayoutSection>
        <LayoutSection span={2}>
          <Align align="right">
            <TypographyText>
              <ImageMultipleUpload onUpload={() => {}}>

              </ImageMultipleUpload>
            </TypographyText>
          </Align>
        </LayoutSection>
      </Layout>
    </>
  );
};

export default SettingsSiteSharing;
