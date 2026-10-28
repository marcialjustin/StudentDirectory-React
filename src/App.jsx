function App() {
 

  return (
    <>

       <HeaderContainer />
       <FormContainer />
       <ListContainer />
   <section id="headerContainer">
        <h1>Student Directory</h1>
        <small>List Of Students</small>
    </section>
        
    <section id="formContainer">
        <form id="studentForm">
            <div class="input-field">
                <label for="name">STUDENT NAME</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div class="input-field">
                <label for="program">PROGRAM</label>
                <input type="text" name="program" id="program"/>
            </div>
            <div>
                <button>Add Student</button>
            </div>
        </form>
        
    </section>

    <section id="listContainer">
            <article class="list-item">
                <h2>Name</h2>
                <p>Onin</p>
                <button>Delete</button>
            </article>
            <article class="list-item">
                <h2>Name</h2>
                <p>Onin</p>
                <button>Delete</button>
            </article>
            <article class="list-item">
                <h2>Name</h2>
                <p>Onin</p>
                <button>Delete</button>
            </article>
            <article class="list-item">
                <h2>Name</h2>
                <p>Onin</p>
                <button>Delete</button>
            </article>
            <article class="list-item">
                <h2>Name</h2>
                <p>Onin</p>
                <button>Delete</button>
            </article>
            
    </section>
    </>
  )
}


export default App