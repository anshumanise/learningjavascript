function main() {
    class User {
        #name;
        #email;
        #password;
        #posts;
        constructor(name, email, password) {
            this.#name = name;
            this.#email = email;
            this.#password = password;
            this.#posts = []; // Initialize private posts array
        }

        // Getters and Setters using private fields
        get name() { 
            return this.#name; 
        }
        set name(name) { 
            this.#name = name; 
        }
        
        get email() { 
            return this.#email; 
        }
        set email(email) { 
            this.#email = email; 
        }

        get password() { 
            return this.#password; 
        }
        set password(password) { t
            his.#password = password; 
        }

        addPost(post) {
            this.#posts.push(post);
        }

        displayPosts() {
            console.log(`Posts by ${this.#name}:`);
            for (const post of this.#posts) {
                console.log(`- ${post.title}`);
            }
        }
    }

    class Post extends User {
        #title; #content; #date; #likeCount;
        constructor(name, email, password, title, content, date) {
            super(name, email, password); // Correct way to inherit
            this.#title = title;
            this.#content = content;
            this.#date = date;
            this.#likeCount = 0;
        }

        
        // ... apply similar logic for other getters/setters
         get title(){
            return this.title;
        }
        set title(title) {
            this.title = title;
        }
        get content(){
            return this.content;
        }
        set content(content) {
            this.content = content;
        }
        get date(){
            return this.date;
        }
        set date(date) {
            this.date = date;
        }
        get likeCount() { 
          return this.#likeCount; 
          }

        addLike() {
            this.#likeCount++;
        }

        displayDetails() {
            console.log(`Owner: ${this.name}`);
            console.log(`Title: ${this.#title}`);
            console.log(`Content: ${this.#content}`);
            console.log(`Date: ${this.#date}`);
            console.log(`Likes: ${this.#likeCount}`);
        }
    }

    // ... rest of your execution logic
    return { User, Post };
}
