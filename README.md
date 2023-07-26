## 프로젝트 목표

Git을 활용한 협업, fetch를 활용한 API 호출(비동기 프로그래밍), 라우팅 구현

## 그라운드룰

- 모든 작업은 분리하여 Github의 이슈탭에 이슈를 생성하고 작업
- 스타일링은 Chakra UI or Tailwind를 사용
- api 작업은 fetch api를 활용
- 모든 Git 컨벤션은 팀의 컨벤션을 따름

## 프로젝트 생성

- create react app을 활용하여 프로젝트를 생성

## 프로젝트 골격

[프로젝트 구조](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) 를 참고하여 코드를 작성

## 로그인 페이지(/)

- 아이디 비밀번호를 입력하는 input을 생성
- 로그인 버튼을 누르면 로그인을 시도(user.json을 활용)
- 성공시 로비 페이지로 이동
- 실패시 모달로 로그인이 실패했음을 알림

## 로비 페이지(/rooms)

- 로비 페이지에 들어오면 방들의 정보를 확인 가능(rooms.json을 활용)
- 각각의 방에 표시되어야할 정보
  - 방 제목fsdfasdafsds
  - 호스트의 아이디
  - 호스트의 티어
  - 티어에 따른 방 색상
    - jack: #C4A164
    - queen: #FFD689
    - king: #FFD700
    - ace: #E58632
    - joker: #D8D8D8
- 방을 클릭하면 방의 상세 페이지로 이동

## 방 상세페이지(/rooms/:roomNumber)

- filter 함수를 이용하여 현재 접속한 방의 정보를 필터링(rooms.json을 활용)

- 화면에 표시되어야하는 정보
  - 방 제목
  - 호스트의 아이디
  - 호스트의 티어
