var names=["Family","Abhisek Agrawal", "Ela Agrwal", "Davensh Agrawal"];

var images=["http://thearcofmass.org/wp-content/uploads/2014/09/HappyFamily.jpg","https://webstockreview.net/images/dad-clipart-father-indian.png ", "https://tse3.mm.bing.net/th?id=OIP.vzkZC0NtWXHiPIPUJdVqXAHaGN&pid=Api&P=0&w=193&h=162", "https://tse2.mm.bing.net/th?id=OIP.PsLipnU4EPXHTdfh7AoALAHaL1&pid=Api&P=0&w=300&h=300"];

var i=0;
function next_member()
{
    i++;
    var family_member=4;
    if(i>family_member){
        i=0;}
        var updated_image=images[i];
        var updated_name=names[i];
    
    document.getElementById("photo").src=updated_image;

    document.getElementById("Name_Display").innerHTML=updated_name;
    i++;

    
}