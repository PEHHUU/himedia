##깃허브에 처음 데이터를 올리는명령어
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/PEHHUU/himedia.git
git push -u origin main


//리액트 시작하기
ctrl +J
mixin을 사용할때 @include 정해진 메서드;
입력을 해야 사용이 가능하다.
hook 기본적인 명령어
const [show,setShow]=useState(false); 상태를 관리할때,
움직이는 값을 관리할때 사용하는 hook
useState :함수형 컴포넌트에서도 상태를 관리 할 수 있게 해주는 hook
형태
-const [변수명,상태를 업데이트 할 함수명]=useState(초기값);
  <!-- const [count , setcount]= useState(0)
  return(
    <div>
      <p>you clicked {count} times </p>
      <button onClick={()=>(setcount(count+1))}>click me +</button>
      <button onClick={()=>(setcount(count-1))}>click me -</button>
    </div>
    ) --> 
uesEffect : 컴포넌트가 렌더링될 때마다 어떠한 작업으로 수행하도록 해야 한다면, 그것을 설정하는 hook으로 사용

