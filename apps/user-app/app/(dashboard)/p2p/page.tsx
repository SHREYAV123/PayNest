import { SendCard } from "../../../components/SendCard";

import { P2PRecipent } from "../../../components/P2PRecipent";
import { getP2PTransactions } from "../../lib/actions/p2pTransfer";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";




export default async function P2PTransferPage() {
    const transactions = await getP2PTransactions();
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.id);
    
    return (
        <div className="w-screen">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            P2P Transfer
        </div>
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                <div >
                    <SendCard />
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-300">
                    <div className="pt-4"> <P2PRecipent transactions={transactions} userId={userId}  /></div>
                   
                </div>
            </div>
        </div>
    );
    }