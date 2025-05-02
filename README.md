# Melopix API 테스트 React 프로젝트

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 기반으로 제작되어으며, **Melopix** 프로젝트에 활용될 외부 API의 테스트를 목적으로 합니다.

## 프로젝트 목적

이 리포지티는 **Melopix** 프로젝트에 사용되는 외부 API들을 통합 테스트하고, 실제 데이터를 기반으로 기능 구현 가능성을 시험하기 위해 생성되었습니다.

## 테스트 대상 API

### 1. [Phototag.ai](https://www.phototag.ai/)

* **설명**: 사용자가 업로드한 이미지를 분석하여 자동으로 태그와 설명을 생성합니다.
* **사용 목적**: 이미지 기반 자동 설명 및 메타데이터 생성.

### 2. [Suno API](https://sunoapi.org/ko)

* **설명**: Phototag.ai로부터 생성된 설명을 입력으로 사용해 음악을 생성합니다.
* **사용 목적**: 설명 기반 AI 음악 생성 시험.

## 사용 가능한 스크립트

프로젝트 디렉토리에서 다음 명령을 실행할 수 있습니다:

### `npm start`

개발 모드에서 앱을 실행합니다.
[http://localhost:3000](http://localhost:3000)에서 앱을 확인할 수 있습니다.

변경 사항이 감지되면 페이지가 자동으로 새로고침되며, 캔상에 린트 에러가 표시됩니다.

### `npm test`

인터랙트화된 watch 모드에서 테스트 러너를 실행합니다.
자세한 내용은 [테스트 실행](https://facebook.github.io/create-react-app/docs/running-tests) 문서를 참고하세요.

### `npm run build`

프로드션을 위한 앱을 `build` 폴더에 버프리드합니다.
파일 이름에 해시가 포함되며, 성능 최적화가 적용됩니다.

### `npm run eject`

⚠️ **주의: 실행 시 복구할 수 없습니다.**

이 명령어는 기본 설정을 프로젝트에 직접 복사해 커스터마이징할 수 있도록 합니다.
Webpack, Babel, ESLint 등의 설정 파일이 노출됩니다.

## 더 알아보기

* [Create React App 문서](https://facebook.github.io/create-react-app/docs/getting-started)
* [React 공식 문서](https://reactjs.org/)
