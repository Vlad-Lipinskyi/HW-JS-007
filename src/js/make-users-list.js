// const template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
import makeUsersList from "../templates/user-list.hbs"
import {users} from "./users";

const layout = makeUsersList({users});
console.log(layout)