import React from "react";
import styled from "styled-components";

import ActivityItem from "./ActivityItem";
import PublicationItem from "./PublicationItem";

const StyledContainer = styled.ul<{ color?: string }>`
  width: 100%;
  color: ${({ color }) => (color != null ? color : "black")};
`;

type Props = {
  color?: string;
};

const Sympothium = (props: Props) => {
  const { color } = props;

  return (
    <StyledContainer color={color}>
      <PublicationItem
        title={
          "シーングラフ生成におけるTransformerを用いたEnd-to-Endモデルの提案"
        }
        journal={"ビジョン技術の実利用ワークショップ2021(VIEW2021), IS2-08"}
        authors={"長崎 好輝，Qiu Yue，青木 義，原 健翔，片岡 裕雄"}
        month={"December"}
        year={2021}
      />
      <ActivityItem
        title={"CyberAgent ACE Hackathon"}
        month={"August"}
        year={2021}
        discription={
          "Developed a web application of ABEMA tv schedule with other three students. Took a role of backend with Go, AWS."
        }
      />
      <PublicationItem
        title={
          "動画内の音と映像の対応付けタスクにおける時間方向アテンションの導入"
        }
        journal={"第27回画像センシングシンポジウム（SSII2021），IS2-04"}
        authors={"長崎 好輝，林 昌希，金子 直史，青木 義満"}
        month={"June"}
        year={2021}
      />
      <PublicationItem
        title={
          "動画内の音と映像の対応付けタスクにおける時間方向アテンションの導入"
        }
        journal={"動的画像処理実利用化ワークショップ2021（DIA2021）, IS1-3"}
        authors={"長崎 好輝，林 昌希，金子 直史，青木 義満"}
        month={"March"}
        year={2021}
      />
      <ActivityItem
        title={"Open Hack U 2020 Vol.4"}
        month={"March"}
        year={2021}
        discription={
          "Developed a web application with other five students. Got 2nd place out of 19 teams."
        }
      />
    </StyledContainer>
  );
};

export default Sympothium;
