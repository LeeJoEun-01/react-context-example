import { useContext } from "react";
import PersonContext from "../contexts/PersonContext"
// 데이터 Get하기 (3) - functional

export default function Example3() {
  // useContext로 컴텍스트를 인자로 호출한다.
  const persons = useContext(PersonContext);
  // useContext의 리턴이 value 이다.
  return (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )
  }
