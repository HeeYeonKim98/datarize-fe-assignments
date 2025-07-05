# Datarize Frontend 과제 전형

## ✔️ Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn 1.22+

### Installation & Development

```bash
# 프로젝트 루트에서 실행
yarn install

# 백엔드 서버 실행 (포트 4000)
yarn start-server

# 프론트엔드 개발 서버 실행 (포트 5173)
yarn start-client
```

</br>

## ✔️ 구현 완료 기능

### 가격대별 구매 빈도 분석
- 날짜 범위 선택을 통한 구매 데이터 필터링
- Chart.js를 활용한 인터랙티브 바 차트
- 가격대별 구매 빈도 시각화 (2만원 이하 ~ 10만원 이상)
- 실시간 데이터 업데이트 및 로딩/에러 상태 관리

### 고객 관리 시스템
- 고객 목록 테이블 (ID, 이름, 구매 횟수, 총 구매 금액)
- 실시간 이름 검색 기능
- 프론트엔드에서 모든 컬럼 정렬 기능 구현 (오름차순/내림차순)
- 고객 상세 정보 모달

### 고객 상세 구매 내역
- 고객별 구매 내역 상세 조회
- 구매 날짜, 상품명, 수량, 가격 정보 표시
- 상품 썸네일 이미지 지원

</br>

## ✔️ Tech Stack
- **Frontend Framework**: React, React DOM, React Router DOM
- **Language**: TypeScript
- **State Management**: TanStack Query (React Query v5)
- **Styling**: Tailwind CSS
- **Charts**: Chart.js, react-chartjs-2
- **UI Components**: shadcn/ui
- **Form Validation**: zod
- **Code Quality**: ESLint, Prettier

</br>

## ✔️ Folder Structure
```
frontend/
├── src/
│ ├── apis/          # API 통신 레이어 - 백엔드 API 호출 함수 및 타입 정의
│ ├── components/    # 공통 UI 컴포넌트 - 재사용 가능한 컴포넌트들
│ ├── features/      # 기능별 모듈 - 각 페이지/기능별 로직과 컴포넌트
│ ├── layouts/       # 레이아웃 컴포넌트 - 전체 앱 레이아웃 및 네비게이션
│ ├── lib/           # 외부 라이브러리 설정 - 유틸리티 함수 및 설정
│ ├── pages/         # 페이지 컴포넌트 - 라우팅될 메인 페이지들
│ ├── providers/     # Context 프로바이더 - 전역 상태 관리 및 프로바이더
│ ├── styles/        # 스타일 관련 - CSS 및 스타일 설정
│ ├── types/         # TypeScript 타입 정의 - 전역 타입 및 인터페이스
│ ├── utils/         # 유틸리티 함수 - 공통 헬퍼 함수들
│ │
│ ├── App.tsx        # page routeing
│ └── main.tsx       # 애플리케이션 진입점
│
├── index.html       # HTML 진입점
└── package.json     # 패키지 의존성 및 스크립트
```
