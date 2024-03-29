# Liner 과제

## 실행방법
1. 의존성 설치하기

```bash
$ npm install 
```

2. 프로젝트 시작하기

```bash
$ npm start 
```

## 프로젝트 파일구조

```
┌── src    
│   ├── api
│   │    ├── config           (axios config를 관리하기 위한 파일)
│   │    ├── document         (document 상세 페이지 안에서 호출하는 api 로직들)
│   │    └── searchResult     (search result 페이지 안에서 호출하는 api 로직들)
│   ├── components            (전역적으로 사용되는 공통 컴포넌트들의 집합)
│   ├── pages                 (react-router의 라우터랑 직접적으로 연결되는 컴포넌트들의 집합)
│   │    ├── [domain page]       
│   │    │     └── components (해당 페이지 안에서만 사용되는 컴포넌트들의 집합)
│   ├── styles                (각 컴포넌트 내에서 사용되는 공통 스타일 변수들의 집합)
│   └── utilities             (비즈니스 로직과는 상관없는 유틸성의 함수들 집합)
```

## 집중했던 부분
### 관심사의 분리
디렉터리에서부터 함수까지 관심사를 분리하여 하나의 함수 혹은 컴포넌트가 많은 역할을 하지 않도록 하고자했다.

### 재사용 가능한 컴포넌트 설계
비즈니스 로직이 컴포넌트에 포함된다면 재사용 측면에서 효율적이지 않기 때문에 제외하여 컴포넌트를 설계했다.
