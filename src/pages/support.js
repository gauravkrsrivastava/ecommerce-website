import Link from "next/link";
import { useForm } from "react-hook-form";
import ThankSupport from "./thank-support";
import { useRouter } from "next/router";

//export default function Home() {
    //async function handleSubmit(e) {
      //e.preventDefault();
      //const data = new FormData(e.currentTarget);
      //console.log(data);
    //}
    export default function Support(){
    const {register,formState:{errors}}=useForm()
    const router=useRouter();
    function handleSubmit(){
        console.log(data)
        router.push({
            pathname:'/thank-support',
        })
    }
    
    return (  
        <>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="text-center text-dark">Contact us</h1>
            <h6 className="text-center text-secondary">Have any question?We'd love to hear from you</h6><br/>

        <div class="row g-3">
            <div class="col-sm-6">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" {...register('firstName',{required:true})} placeholder="First name" required />
                {errors.firstName && <div class="text-danger">
                    Valid first name is required.
                </div>}
            </div>
            <div class="col-sm-6">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" {...register('lastName',{required:true})} placeholder="last name" required />
                {errors.lastName && <div class="text-danger">
                    Valid last name is required.
                </div>}
            </div>
            <div className="email block col-5">
                <label htmlFor="frm-email">Email</label>
                <input type="email" class="form-control" id="email" {...register('email',{required:true})} placeholder="you@example.com" />
                {errors.email && <div class="text-danger">
                    Please enter a valid email address.
                </div>}                  
            </div>
            <div className="block phone col-5">
                <label htmlFor="frm-phone">Phone</label>
                <input type="text" class="form-control" id="phone" {...register('phone',{required:true})} placeholder="+91" />
                {errors.phone && <div class="text-danger">
                    Please enter a valid phone number.
                </div>}                  
            </div>
            <div className="message block">
                <label htmlFor="frm-message">Message</label>
                {errors.message && <div class="text-danger">
                    Please enter message.
                </div>} 
                <textarea class="form-control" id="message" rows="6" cols={40} name="message" {...register('message',{required:true})} placeholder="write your message here..."></textarea>
            </div>
            <div className="button block">
                <Link href="/support"><button type="submit" className="w-100 btn btn-primary btn-lg text-center">Submit</button></Link>
            </div>
        </div>
      </form>
      </>
    )
}
    