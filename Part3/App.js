function App() {
    return (
      <div>
      <Person
        name="Homer"
        age={38}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
      <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Lisa"
        age={8}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
    );
  }

//Props in the App file are for NamedComponent establishing the name "Bob" to be returned