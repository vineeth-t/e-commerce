import { Hero} from "../../components/heroImage/heroImage";
import { ShoppingCatergory } from "../../components";
export function Home({SetRoute}){
    return(
        <div>
                <Hero setState={SetRoute}/>
                <ShoppingCatergory/>
        </div>
    )
}