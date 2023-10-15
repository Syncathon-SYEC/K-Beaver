import styled from "styled-components";
import { sizing } from "../../util";

const StyledStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${sizing(20)};
`;

const Timeline = styled.div`
  display: flex;
  padding-top: ${sizing(4)};
  flex-direction: column;
  align-items: center;
  gap: ${sizing(-4)};
  align-self: stretch;

  & .head {
    stroke-width: ${sizing(4)};
    stroke: var(--material-theme-key-colors-primary, #ffb261);
    width: ${sizing(24)};
    height: ${sizing(24)};
  }

  & .trail {
    width: ${sizing(2)};
    flex: 1 0 0;
    background: #d9d6d2;
  }
`;

const Title = styled.div`
  display: flex;
  width: ${sizing(828)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(12)};

  & .title {
    color: var(--material-themerefneutralneutral6);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: ${sizing(20)};
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: ${sizing(32)};
    top: 0;
    white-space: nowrap;
  }

  & .description {
    color: var(--material-themerefneutralneutral6);
    font-family: "Pretendard-Medium", Helvetica;
    font-size: ${sizing(16)};
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: ${sizing(24)};
    top: 0;
    width: ${sizing(828)};
  }
`;

const Content = styled.div`
  display: flex;
  padding-bottom: ${sizing(0)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(48)};
`;

const Suggestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(24)};
`;

const KeywordsContainer = styled.div`
  display: flex;
  width: ${sizing(828)};
  padding: ${sizing(40)} ${sizing(20)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizing(12)};
  border-radius: ${sizing(12)};
  border: ${sizing(1)} solid #ccc9c5;

  & .keyword-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${sizing(12)};
  }

  & .keyword {
    display: flex;
    padding: ${sizing(16)} ${sizing(20)};
    flex-direction: column;
    align-items: flex-start;
    gap: ${sizing(2)};
    border-radius: ${sizing(12)};
    background: var(--material-theme-key-colors-primary, #ffb261);
  }

  & .label {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-SB */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 600;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

const Beaver = styled.div`
  display: flex;
  width: ${sizing(828)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(12)};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizing(12)};

  & .beaver {
    display: flex;
    width: ${sizing(32)};
    height: ${sizing(32)};
    padding: ${sizing(6)} ${sizing(4)} ${sizing(6)} ${sizing(5)};
    justify-content: center;
    align-items: center;
  }

  & .bot-name {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-SB */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 600;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

const Comment = styled.div`
  display: flex;
  padding: ${sizing(20)} ${sizing(24)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(20)};
  align-self: stretch;
  border-radius: ${sizing(0)} ${sizing(12)} ${sizing(12)} ${sizing(12)};
  background: var(--material-theme-ref-secondary-secondary-96, #fff1e7);

  & .comment {
    align-self: stretch;
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 500;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

export const Step02 = () => {
  return (
    <StyledStep>
      <Timeline>
        <div className="head">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="#FFB261" stroke-width="4" />
          </svg>
        </div>
        <div className="trail" />
      </Timeline>

      <Content>
        <Title>
          <p className="title">
            STEP 2. 내가 꼭 필요로 하는 주택 조건 확인하기
          </p>
          <p className="description">
            이번엔 내가 왜 이사가 필요한지 생각해봐야 해요. 이전 집에서는 무엇이
            가장 불편했나요? 어떤 조건이 더 나아지길 바랬나요? 학교 또는
            직장과의 거리, 편의점, 마트, 병원 같은 필요한 시설의 유무 등 고려할
            조건을 나열하고 우선순위를 작성해보세요.
          </p>
        </Title>

        <Suggestion>
          <KeywordsContainer>
            <div className="keyword-wrapper">
              <div className="keyword">
                <div className="label">~한 주택</div>
              </div>

              <div className="keyword">
                <div className="label">~가 좋은 주택</div>
              </div>

              <div className="keyword">
                <div className="label">~가 아닌 주택</div>
              </div>
            </div>
          </KeywordsContainer>

          <Beaver>
            <Profile>
              <img className="beaver" alt="beaver" src="beaver.png" />
              <div className="bot-name">비버’s comment</div>
            </Profile>

            <Comment>
              <p className="comment">
                질문에 해주신 답변을 토대로 사용자님이 관심 가질 수 있는 매물 몇
                개를 찾아왔어요. 만약 실제로 방문해 보고 싶은 매물이 있다면
                '문의하기' 버튼을 클릭해보세요. 비버가 대신 문의글을
                작성해드릴게요. 작성된 글을 검토하시고 바로 중개사무소에
                문의해보세요!
              </p>
            </Comment>
          </Beaver>
        </Suggestion>
      </Content>
    </StyledStep>
  );
};