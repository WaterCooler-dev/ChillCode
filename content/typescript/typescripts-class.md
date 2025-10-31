# 타입스크립트의 클래스

## 시작하기 전에

이번 단계는 자바스크립트의 `class` 문법을 알고 있다는 가정 하에 진행됩니다!

## 자바스크립트의 클래스

자바스크립트에도 클래스 문법이 있다는 사실은 다들 아실 겁니다.

```javascript
class Rectangle {
	constructor(height, width) {
		this.height = height; 
		this.width = width;
	}
	
	getArea() {
		return this.height * this.width;
	}
}
```

하지만 자바스크립트의 클래스는 다른 언어와 다르게 프로토타입 기반이고, 다른 클래스를 지원하는 객체지향 언어들 보다는 기능이 부족합니다. 예를 들자면 `public`, `private`문법이나 추상 클래스같은 기능들이 부족한 것이죠. 이것을 잘 알기 위해, 객체지향 언어의 대표주자 자바와 자바스크립트의 클래스 문법을 비교해보겠습니다.

## 자바 클래스 vs 자바스크립트 클래스

자바에서는 메서드나 속성, 클레스 자체에도 접근 지시자를 걸 수 있습니다.

```java
public class Rectangle {
	private int height;
	private int width;
	
	Rectangle(int height, int width) {
		this.height = height;
		this.width = width;
	}
	
	public int getHeight() {
		return height;
	}
	
	public int getWidth() {
		return width;
	}
}
```

하지만 우리의 자바스크립트에는 그런 기능은 없죠.

```javascript
class Rectangle {
	constructor(height, width) {
		this.height = height; // 전혀 private하지 않잖아?
		this.width = width; // 얘도 전혀 private하지 않잖아?
	}
	
	getHeight() {
		return height;
	}
	
	getWidth() {
		return width;
	}
}
```

또한 자바에서는 추상 클래스라는 것이 존재합니다.

```java
abstract class Job {
	public void iDontWantToWork() {
		system.out.println("ㅏㅏㅏㅏㅏㅏㅏ 일하기 싫다ㅏㅏㅏㅏㅏ");
	}
	
	public abstract void work();
}

class Programer extends Job {
	@overide
	public void work() {
		system.out.println("에러를 고치려다 7개의 에러를 생성하기");
		system.out.println("그래놓고 어???? 시전하기");
		// 참고: 프로그래머들한테 어???라는 목소리는 죽음의 시작점이다
	}
}
```

하지만 우리의 자바스크립트에서는 능률을 올려주는 추상 클래스 따위는 존재하지 않습니다.

```javascript
// 추상 클래스는 먹는건가요?
```

## 타입스크립트의 클래스

앞에서 보셨다 싶이, 자바스크립트의 클래스 문법은 다른 객체지향 언어보다 기능이 부족합니다. 하지만 타입스크립트에서는 자바스크립트의 클래스에 객체지향같은 여러 문법들을 추가해서 이런 단점을 보완해줍니다. 

또한 타입스크립트의 클래스는 자바스크립트의 클래스와 살짝 다른 점들도 있습니다.
타입스크립트에서는 속성을 선언할때, 생성자에서 속성을 만드는 것이 아니라, 처음부터 명시를 해 줄수 있습니다.

```typescript
class 속성명시하기 {
	variable: number; // 속성: 타입 형태!
	construtor() {
		this.variable = 123;
	}
}
```

또한 생성자 / 메소드의 매개변수나 리턴 값에 속성을 지정해 줄 수도 있습니다. 

```typescript
class Rectangle {
	height: number;
	width: number;
	
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	
	getHeight(): number {
		return height;
	}
	
	getWidth(): number {
		return width;
	}
}
```

## 글을 마치며

이렇게 오늘은 타입스크립트의 클래스 문법에 대해 알아보았습니다. 다음으론 타입스크립트의 접근 지시자에 대해 알아보겠습니다.

