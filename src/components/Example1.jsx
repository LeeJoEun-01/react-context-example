import PersonContext from "../contexts/PersonContext"
// 데이터 Get하기 (1) - consumer

// 데이터 Get하기 -1) 컨텍스트 가져오기
export default function Example1() {
  // 데이터 Get하기 -2) 컨텍스트.컨슈머 사용
  return (
    <PersonContext.Consumer>
    {/* // 데이터 Get하기 -3) value랑 persons랑 같다 */}
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}