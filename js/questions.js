const questions = [
    {
      q: "상대의 이상적인 키는?",
      a: [
        { label: "151cm 이상", image: "images/cat.jpg" },
        { label: "156cm 이상", image: "images/cat.jpg" },
        { label: "161cm 이상", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "상대의 이상적인 몸무게는?",
      a: [
        { label: "45kg 이하", image: "images/cat.jpg" },
        { label: "50kg 이하", image: "images/cat.jpg" },
        { label: "55kg 이하", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "상대의 이상적인 얼굴형은?",
      a: [
        { label: "강아지상", image: "images/cat.jpg" },
        { label: "고양이상", image: "images/cat.jpg" },
        { label: "토끼상", image: "images/cat.jpg" },
        { label: "여우상", image: "images/cat.jpg" }
      ]
    },
    {
      q: "상대의 이상적인 학력은?",
      a: [
        { label: "초등학교", image: "images/cat.jpg" },
        { label: "중/고등학교", image: "images/cat.jpg" },
        { label: "대학교", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "상대의 이상적인 경제력은?",
      a: [
        { label: "서민층", image: "images/cat.jpg" },
        { label: "중산층", image: "images/cat.jpg" },
        { label: "부유층", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "상대의 이상적인 직업은?",
      a: [
        { label: "전문직", image: "images/cat.jpg" },
        { label: "서비스업", image: "images/cat.jpg" },
        { label: "전업주부", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "이상적인 자녀 계획은?",
      a: [
        { label: "1명", image: "images/cat.jpg" },
        { label: "2명", image: "images/cat.jpg" },
        { label: "3명 이상", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "원하는 거주 국가는?",
      a: [
        { label: "대한민국", image: "images/cat.jpg" },
        { label: "상대국가", image: "images/cat.jpg" },
        { label: "제3국", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "상대가족과 동거 가능범위는?",
      a: [
        { label: "형제만 가능", image: "images/cat.jpg" },
        { label: "부모만 가능", image: "images/cat.jpg" },
        { label: "불가능", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
      q: "본인이 가족과 동거를 원하나요?",
      a: [
        { label: "형제와 동거", image: "images/cat.jpg" },
        { label: "부모와 동거", image: "images/cat.jpg" },
        { label: "동거 원치 않음", image: "images/cat.jpg" },
        { label: "무관함", image: "images/cat.jpg" }
      ]
    },
    {
  q: "본인의 흡연 정도는? (하루)",
  a: [
    { label: "비흡연", image: "images/cat.jpg" },
    { label: "5개비 이하", image: "images/cat.jpg" },
    { label: "10개비 이하", image: "images/cat.jpg" },
    { label: "한갑 이상", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 음주 정도는? (일주일)",
  a: [
    { label: "금주", image: "images/cat.jpg" },
    { label: "1번 이상", image: "images/cat.jpg" },
    { label: "3번 이상", image: "images/cat.jpg" },
    { label: "5번 이상", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 경제적 상황은?",
  a: [
    { label: "부동산 소유", image: "images/cat.jpg" },
    { label: "자동차 소유", image: "images/cat.jpg" },
    { label: "둘다 소유", image: "images/cat.jpg" },
    { label: "없음", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 연수입은?",
  a: [
    { label: "3천~5천", image: "images/cat.jpg" },
    { label: "5천~7천", image: "images/cat.jpg" },
    { label: "7천~1억", image: "images/cat.jpg" },
    { label: "1억 이상", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 결혼 여부는?",
  a: [
    { label: "미혼", image: "images/cat.jpg" },
    { label: "재혼(3년 미만)", image: "images/cat.jpg" },
    { label: "재혼(5년 미만)", image: "images/cat.jpg" },
    { label: "재혼(5년 이상)", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 혈액형은?",
  a: [
    { label: "A형", image: "images/cat.jpg" },
    { label: "B형", image: "images/cat.jpg" },
    { label: "AB형", image: "images/cat.jpg" },
    { label: "O형", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 MBTI는?",
  a: [
    { label: "ISTJ", image: "images/cat.jpg" },
    { label: "ISFJ", image: "images/cat.jpg" },
    { label: "INFJ", image: "images/cat.jpg" },
    { label: "INTJ", image: "images/cat.jpg" },
    { label: "ISTP", image: "images/cat.jpg" },
    { label: "ISFP", image: "images/cat.jpg" },
    { label: "INFP", image: "images/cat.jpg" },
    { label: "INTP", image: "images/cat.jpg" },
    { label: "ESTP", image: "images/cat.jpg" },
    { label: "ESFP", image: "images/cat.jpg" },
    { label: "ENFP", image: "images/cat.jpg" },
    { label: "ENTP", image: "images/cat.jpg" },
    { label: "ESTJ", image: "images/cat.jpg" },
    { label: "ESFJ", image: "images/cat.jpg" },
    { label: "ENFJ", image: "images/cat.jpg" },
    { label: "ENTJ", image: "images/cat.jpg" },
    { label: "모름", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 취미는?",
  a: [
    { label: "여행", image: "images/cat.jpg" },
    { label: "스포츠", image: "images/cat.jpg" },
    { label: "드라이브", image: "images/cat.jpg" },
    { label: "맛집탐방", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 최종 학력은?",
  a: [
    { label: "초등학교 이상", image: "images/cat.jpg" },
    { label: "중학교 이상", image: "images/cat.jpg" },
    { label: "고등학교 이상", image: "images/cat.jpg" },
    { label: "대학교 이상", image: "images/cat.jpg" }
  ]
},
{
  q: "본인의 특기는?",
  a: null
},
{
  q: "본인의 가족관계는?",
  a: null
},
{
  q: "신체적 참고사항(질병 포함)",
  a: null
},
{
  q: "범죄와 관련된 사항",
  a: null
},
{
  q: "본인의 신체적 특징은?",
  a: null
}
  ];