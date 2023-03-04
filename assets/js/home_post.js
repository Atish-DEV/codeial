$(document).ready(function(){
    $('#post-form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:'post',
            url:'/post/create-post',
            data:$('#post-form').serialize(),
            success:function(data){
                console.log(data);
                let newPostItem=createPost(data.data);
                $('#post-container>ul').prepend(newPostItem);
                deletePost($(' .post-dlt-btn',newPostItem));
                new Noty({
                    text: "New Post Created",
                    theme:'relax',
                    type:"success",
                    timeout:1000,
                    layout:'bottomRight'
                     }).show();
            },
            error:function(err){
                console.log(err);
            }
        })
    });


    function createPost(data){
       return $(`
       <li id="post-${data.post._id}">
       <p>
          <small>
          <a class="post-dlt-btn" href="/post/destroy/${data.post._id}">X</a>
       </small>
    </p> 
       <p>${data.post.content}</p>
       <p><small>${data.user}</small></p>
       <br/>
    </li>
       `) 
    }
    $('.post-dlt-btn').on('click',function(e){
        e.preventDefault();
        console.log(e.target.href);
        $.ajax({
            type:'get',
            url:e.target.href,
            success:function(data){
                console.log(data);
                $(`#post-${data.data.post_id}`).remove();
                new Noty({
                    text: "Post Deleted",
                    theme:'relax',
                    type:"success",
                    timeout:1000,
                    layout:'bottomRight'
                     }).show();
            },
            error:function(err){
                console.log(err);
            }
        });
    });
    function deletePost(post){
        $(post).click(function(e){
            e.preventDefault();
            $.ajax({
                type:'get',
                url:$(post).prop('href'),
                success:function(data){
                    console.log(data);
                    $(`#post-${data.data.post_id}`).remove();
                    new Noty({
                        text: "Post Deleted",
                        theme:'relax',
                        type:"success",
                        timeout:1000,
                        layout:'bottomRight'
                         }).show();
                },
                error:function(err){
                    console.log(err);
                }
            })
        })
    }

});