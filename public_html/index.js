/**
 * Created by sakshi on 14/2/17.
 */
function toggle() {
    $.post('/ecom/edit', {item: $('#newtodo').val(), price: $('#price').val()}, function()
        {
            console.log("3");
            refreshTodos();
        }
    )

}
function delet() {
    console.log("inside del");
    $.post('/ecom/delete', {item: $('#newtodo').val(), price: $('#price').val()}, function()
        {
            console.log("4");
            refreshTodos();
        }
    )

}
function refreshTodos() {

    console.log("4");
    $.get('/ecom/all', function (data) {
        let todolist = "";
        //
        // for (todo of data) {
        //     todolist += "<li>";
        //     todolist += "<span>" + todo.item + "</span>  ";
        //     todolist += "<span>" + todo.price + "</span>";
        //     todolist+="<button onclick='toggle()'>"+ "edit"+"</button>"
        //     todolist+="<button onclick='delet()'>"+ "delete"+"</button>"
        //     todolist += "</li>"
        // }
        //
        // $('#todolist').html(todolist)
        let cartTable = $('#cart-table');
        cartTable.empty();
        cartTable.append($(`
        <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Remove</th>
        </tr>
        </thead>
  `));
        var ii =1;
        for (todo of data ) {
            cartTable.append(
                $(`<tr>
            <td>${todo.item}</td>
            <td>Rs. ${todo.price}</td>
            <td><button onclick="toggle()" class="fa fa-minus-circle"></button> </td>
             <td><button onclick="delet()" class="fa fa-plus-circle"></button></td>
        </tr>`)
            );
            ii++;
        }
    })
}

// function toggleTodo(el, todoId) {
//     var done = $(el).prop('checked');
//
//     $(el).prop('checked', !done);
//
//     $.post('/ecom/edit',
//         {taskid: todoId, done: (done ? 1 : 0)},
//         function (data) {
//             console.log(data, status);
//             if (data && data.changedRows > 0) {
//                 $(el).prop('checked', done)
//             }
//         })
// }

// $('.item').click(function () {
//     $(this).css('textDecoration') == 'line-through' ?
//         $(this).css('textDecoration', '') :
//         $(this).css('textDecoration', 'line-through');
//
// });
function displayCart() {
    let cartTable = $('#cart-table');
    cartTable.empty();
    cartTable.append($(`
        <thead>
        <tr>
            <th>S.No.</th>
            <th>Product</th>
            <th>Price</th>
        </tr>
        </thead>
  `));
    var ii =1;
    for (todo of data ) {
        cartTable.append(
            $(`<tr>
            <td>${todo.item}</td>
            <td>Rs. ${todo.price}</td>
            <td>
              <i onclick="delete()" class="fa fa-minus-circle"></i>
              ${cart[prod]}
              <i onclick="toggle()" class="fa fa-plus-circle"></i>
            </td>
        </tr>`)
        );
        ii++;
    }
}

$(function () {

    refreshTodos();
    $("#add").click(function () {
        console.log("1");
        // alert("The paragraph was clicked.");
        $.post('/ecom/add', {item: $('#newtodo').val(), price: $('#price').val()}, function()
        {
            console.log("2");
            refreshTodos();
        }
        )
    });
});
// <div >
//
//
// <nav class="navbar navbar-inverse">
//     <div class="container-fluid">
//     <div class="navbar-header">
//     <a class="navbar-brand" href="#">WebSiteName</a>
//     </div>
//     <ul class="nav navbar-nav">
//     <li class="active"><a href="http://localhost:3011/">Home</a></li>
//     <li class="dropdown">
//     <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
// <span class="caret"></span></a>
//     <ul class="dropdown-menu">
//     <li><a href="#">Page 1-1</a></li>
// <li><a href="#">Page 1-2</a></li>
// <li><a href="#">Page 1-3</a></li>
// </ul>
// </li>
// <li><a href="#">Page 2</a></li>
// <li><a href="#">Page 3</a></li>
//
// </ul>
//
// <ul class="nav navbar-nav navbar-right">
//     <form class="navbar-form navbar-left">
//     <div class="form-group">
//     <input type="text" class="form-control" placeholder="Search">
//     </div>
//     <button type="submit" class="btn btn-default">Search</button>
//     </form>
//     <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user" class="caret"></span></a>
//     <ul class="dropdown-menu">
//     <li><a href="#"></a></li>
//     <li><a href="#">Account</a></li>
//     <li><a href="#">Page 1-3</a></li>
// </ul>
//
// </li>
// </ul>
// </div>
// </nav>
// </div>