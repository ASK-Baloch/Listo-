import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationPage = () => {
    const {userId, orgId} = auth();
    return (
        <div>
       Organization page 
        </div>
    );
}

export default OrganizationPage;