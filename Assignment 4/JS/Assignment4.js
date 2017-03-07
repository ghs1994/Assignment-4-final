function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    {
        document.getElementById("Area1").style.visibility = "visible";
        document.getElementById("Area2").style.visibility = "hidden";
        }
        else if (document.getElementById("menu").value == "Show Area 2")
        {
            document.getElementById("Area1").style.visibility = "hidden";
            document.getElementById("Area2").style.visibility = "visible";
            }
            else
            {
                document.getElementById("Area1").style.visibility = "hidden";
                document.getElementById("Area2").style.visibility = "hidden";
                }
                }